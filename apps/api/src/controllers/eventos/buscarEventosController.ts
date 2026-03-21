import { prisma } from "../../config/database";
import { Response, Request } from "express";


export async function BuscarEventos(
    req: Request, 
    res: Response
) {

    const { search, page = "1", limit = "10" } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const where = {
        tenant_id: req.tenant!.id,
        ...(search && {
        titulo: {
            contains: String(search),
            mode: "insensitive" as const,
            },
        }),
    };

    // busca os eventos paginados
    const eventos = await prisma.eventos.findMany({
        where,
        select: {
        id: true,
        titulo: true,
        closing_date: true,
        status: true,
    },
        orderBy: {
            created_at: "desc",
    },
        skip,
        take: limitNumber,
    });

    // conta total sem paginação
    const total = await prisma.eventos.count({ where });

    return res.status(200).json({
        data: eventos,
        total,
        page: pageNumber,
        limit: limitNumber,
    });

}

export default BuscarEventos;
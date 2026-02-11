import z from "zod";
import tenantScehma from "../tenants/tenantSchema";
import usuarioSchema from "./usuarioSchema";

const buscarUsuariosSchema = z
  .object({
    response: z
      .array(usuarioSchema.omit({ tenantId: true }))
      .or(
        usuarioSchema.extend({
          tenant: tenantScehma.pick({ nome: true, slug: true }),
        })
      ),
  })
  .strict();

export type BuscarUsuariosResponseSchema = z.infer<
  typeof buscarUsuariosSchema.shape.response
>;

export default buscarUsuariosSchema;

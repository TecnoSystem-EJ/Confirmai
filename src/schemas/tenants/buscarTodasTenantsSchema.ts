import z from "zod";
import tenantScehma from "./tenantSchema";

const buscarTodasTenantsSchema = z.object({
  response: z.array(
    tenantScehma.extend({
      _count: z.object({
        eventos: z.int(),
      }),
    })
  ),
});

export type BuscarTodasTenantsResponseSchema = z.infer<
  typeof buscarTodasTenantsSchema.shape.response
>;

export default buscarTodasTenantsSchema;

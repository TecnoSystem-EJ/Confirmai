import z from "zod";
import tenantScehma from "./tenantSchema";

const buscarTenantSchema = z
  .object({
    response: tenantScehma,
  })
  .strict();

export type BuscarTenantResponseSchema = z.infer<
  typeof buscarTenantSchema.shape.response
>;

export default buscarTenantSchema;

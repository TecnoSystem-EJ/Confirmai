import z from "zod";
import ticketTypeSchema from "./ticketTypeSchema.js";

const listarTicketTypesSchema = z.object({
  response: z.array(ticketTypeSchema),
});

export type ListarTicketTypesResponseSchema = z.infer<
  typeof listarTicketTypesSchema.shape.response
>;

export default listarTicketTypesSchema;

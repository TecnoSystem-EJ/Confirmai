import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";
import batchSchema from "./batchSchema";
import batchTicketSchema from "./batchTicketSchema";
import eventoSchema from "./eventoSchema";
import ticketTypeSchema from "./ticketTypeSchema";

const detalhesEventoSchema = z.object({
  params: paramUUIDSchema,
  response: eventoSchema.extend({
    batches: z.array(
      batchSchema.extend({
        batchTickets: z.array(
          batchTicketSchema.extend({
            ticketType: ticketTypeSchema,
          }),
        ),
      }),
    ),
  }),
});

export type DetalhesEventoResponseSchema = z.infer<
  typeof detalhesEventoSchema.shape.response
>;

export type DetalhesEventoParamsSchema = z.infer<
  typeof detalhesEventoSchema.shape.params
>;

export default detalhesEventoSchema;

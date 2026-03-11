import z from "zod";

const checkinSchema = z.object({
  request: z.object({
    hash: z.string().min(10),
  }),
});

export type CheckinRequest = z.infer<typeof checkinSchema.shape.request>;

export default checkinSchema;
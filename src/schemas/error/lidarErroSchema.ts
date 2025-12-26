import z from "zod";

const lidarErroSchema = z.object({
  erro: z.string(),
  mensagem: z.string().or(z.array(z.string())),
  path: z.string(),
  status: z.number(),
  metodo: z.string(),
  data: z.string(),
});

export type LidarErroSchema = z.infer<typeof lidarErroSchema>;

export default lidarErroSchema;

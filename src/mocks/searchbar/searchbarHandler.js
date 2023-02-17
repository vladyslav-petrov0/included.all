import { rest } from "msw";

export const searchbarHandler = () =>
  rest.get("/api/search", (req, res, ctx) => {
    return res(ctx.status(200));
  });

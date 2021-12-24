import { RequestHandler } from "express";

import { searchCore } from "../../core/search";

interface searchController {
  search: RequestHandler;
}

export const searchController: searchController = {
  search: async (req, res) => {
    const populated = Boolean(req.query.populated);
    const data = await searchCore.search(req.params.pattern, { populated });
    res.json({ data });
  },
};

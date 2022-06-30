import { createIPX, createIPXMiddleware } from "ipx";
// https://github.com/unjs/ipx
const ipx = createIPX({
  dir: "", // absolute path to images dir
});
export default createIPXMiddleware(ipx);

import pkg from "jayson";
const { Server } = pkg;

import { LRP } from "./LRP.js";

export class LRPServer {
  private server;

  constructor() {
    this.server = new Server({
      parse: async (args: any[], callback: any) => {
        const res = await LRP.parse(args[0]);
        callback(null, res);
      },
      initExecution: (args: any[], callback: Function) => {
        callback(null, LRP.initExecution(args[0]));
      },
      checkBreakpoint: (args: any[], callback: Function) => {
        callback(null, LRP.checkBreakpoint(args[0]));
      },
      getBreakpointTypes: (args: any[], callback: Function) => {
        callback(null, LRP.getBreakpointTypes());
      },
      getRuntimeState: (args: any[], callback: Function) => {
        callback(null, LRP.getRuntimeState(args[0]));
      },
      nextStep: (args: any[], callback: Function) => {
        callback(null, LRP.nextStep(args[0]));
      },
    });
  }

  protected async parse(args: any[]): Promise<any> {
    try {
      const result = await LRP.parse(args[0]);
      console.log(result);

      return result;
    } catch (error) {
      console.error("Error during parse:", error);
      throw new Error("Failed to parse.");
    }
  }

  public start(port?: number): void {
    if (!port) this.server.tcp().listen(49152, "localhost");
    this.server.tcp().listen(port, "localhost");
    console.log("[Server] server is running on port " + port ?? 49152);
  }

  customAsyncFunction(): Promise<any> {
    return new Promise((resolve, reject) => {
      // Perform some asynchronous operation here
      setTimeout(() => {
        // Simulating an asynchronous operation
        const result = { astRoot: "Coubeh" };
        resolve(result);
      }, 1000);
    });
  }
}

declare function installWrangler(): Promise<void>;
declare function authenticationSetup(): void;
declare function execCommands(commands: string[], cmdType: string): Promise<void>;
declare function uploadSecrets(): Promise<number[] | undefined>;
declare function wranglerCommands(): Promise<void>;
export { authenticationSetup, execCommands, installWrangler, uploadSecrets, wranglerCommands, };

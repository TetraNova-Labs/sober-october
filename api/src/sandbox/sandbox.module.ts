import {Module} from "@nestjs/common";
import {UserModule} from "../user/user.module";


/*
    This module imports the UserModule, where the UserEntity relies.
    The UserEntity is referenced with sandbox.controller.ts
    which uses dependency injection to inject the User Repository to fetch all users.

    However if the UserEntity would not be re-exported by exporting the TypeOrmModule where the UserEntity
    it would not be referencable.

    THerefore it is important to re-export for example TypeOrmModule when there are entities inside the module
    which will need to be used inside another module
 */
@Module({
    imports: [UserModule]
})
export class SandboxModule {}

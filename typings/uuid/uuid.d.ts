declare let uuid: uuid;

interface uuid {
    v1(): string;
    v4(): string;
}

declare module "uuid" {
    export = uuid;
}

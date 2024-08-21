import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {
const users = await prisma.user.findMany({
    where: {
        email: {
            contains: "alice@prisma.io",

        },
    },
    cacheStrategy: { ttl: 60},
});
console.log(users);
}
main()
.catch(e =>  {

}).finally(async () => {
    await prisma.$disconnect()
})
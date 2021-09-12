using Microsoft.EntityFrameworkCore;

namespace Projecty
{
    public class DbInitializer
    {
        public static void Initialize(DatabaseContext context)
        {
            context.Database.Migrate();
        }
    }
}

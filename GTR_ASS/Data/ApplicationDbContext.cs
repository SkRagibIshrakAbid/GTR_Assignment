using GTR_ASS.Models;
using Microsoft.EntityFrameworkCore;

namespace GTR_ASS.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options): base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }

    }
}

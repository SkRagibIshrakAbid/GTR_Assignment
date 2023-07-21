using GTR_ASS.Data;
using GTR_ASS.Interfaces;
using GTR_ASS.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GTR_ASS.Repository
{
    public class IProductRepo : IProduct
    {
        private readonly ApplicationDbContext _context;
        public IProductRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        public string Create(Product data)
        {
            _context.Products.Add(data).ToString();
            var state = _context.SaveChanges();
            if (state > 0)
            {
                return "Created Successfully";
            }
            return "Failed to create";
        }

        public string Delete(Guid id)
        {
            Product product = _context.Products.Where(x => x.ProductId == id).FirstOrDefault();
            _context.Products.Remove(product).ToString();
            var state = _context.SaveChanges();
            if (state > 0)
            {
                return "Deleted Successfully";
            }
            return "Failed to delete";
        }

        public Product GetById(Guid id)
        {
            return _context.Products.Where(x => x.ProductId == id).FirstOrDefault();
        }

        public List<Product> GetList()
        {
            return _context.Products.ToList();
        }

        public string Update(Product data)
        {
            _context.Products.Update(data).ToString();
            var state = _context.SaveChanges();
            if (state > 0)
            {
                return "Updated Successfully";
            }
            return "Failed to update";
        }
    }
}

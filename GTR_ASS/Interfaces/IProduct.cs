using GTR_ASS.Models;

namespace GTR_ASS.Interfaces
{
    public interface IProduct
    {
        string Create(Product data);
        string Update(Product data);
        string Delete(Guid id);
        Product GetById(Guid id);
        List<Product> GetList();
    }
}

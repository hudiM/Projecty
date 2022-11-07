using System.Collections.Generic;

namespace Projecty.Data.Models
{
    public class LabelCategoryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<Label> Labels { get; set; }
    }
}

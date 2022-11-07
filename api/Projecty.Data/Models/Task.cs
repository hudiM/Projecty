using System.Collections.Generic;

namespace Projecty.Data.Models
{
    public class Task : PlanningModel
    {
        public List<Tag> Tags { get; set; }

        public string Priority { get; set; }
    }
}

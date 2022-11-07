using System.Collections.Generic;

namespace Projecty.Data.Models
{
    public class TaskDto : PlanningModelDto
    {
        public List<int> TagIds { get; set; }
        public List<Tag> Tags { get; set; }

        public string Priority { get; set; }
    }
}

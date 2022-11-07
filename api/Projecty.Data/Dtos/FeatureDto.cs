using System.Collections.Generic;

namespace Projecty.Data.Models
{
    public class FeatureDto : PlanningModelDto
    {
        public List<int> TaskIds { get; set; }
        public List<Task> Tasks { get; set; }

        public List<int> TagIds { get; set; }
        public List<Tag> Tags { get; set; }

        public int Rating { get; set; }
    }
}

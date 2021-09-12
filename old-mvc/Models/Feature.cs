using System;
using System.Collections.Generic;

namespace Projecty.Models
{
    public class Feature : PlanningModel
    {
        public List<Task> Tasks { get; set; }

        public int Rating { get; set; }

        public string RatingAsStarString => ConvertRating();

        private string ConvertRating()
        {
            string result = "☆☆☆☆☆";

            switch (Rating)
            {
                case 1:
                    result = "★☆☆☆☆";
                    break;
                case 2:
                    result = "★★☆☆☆";
                    break;
                case 3:
                    result = "★★★☆☆";
                    break;
                case 4:
                    result = "★★★★☆";
                    break;
                case 5:
                    result = "★★★★★";
                    break;
                default:
                    break;
            }

            return result;
        }
    }
}

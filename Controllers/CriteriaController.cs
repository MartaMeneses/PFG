using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using student_monitoring_dashboard.Data;

namespace student_monitoring_dashboard.Controllers
{   
    [Produces("application/json")]
    [Route("api/Criterias")]
    [ApiController]
    public class CriteriaController : ControllerBase
    {   
        private readonly DashContext _context;

        public CriteriaController(DashContext context)
        {
            _context = context;
        }
        
        // public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        // {
        //     return Ok(await _context.Courses.ToListAsync());

        // }
        
        /*public IEnumerable<Criteria> GetCriteria()
        {
            return _context.Criteria;
        }*/
        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Criteria>>> GetCriteria(int yoloyeet)
        {
            var query =
            from c in _context.Criteria
            join f in _context.Feedback on c.FeedBackID equals f.FeedbackID
            join s in _context.Student on f.StudentID equals s.StudentID
            where s.StudentID == yoloyeet
            select c;
            return Ok(query);
        }
    }
}

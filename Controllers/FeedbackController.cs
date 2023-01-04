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
    [Route("api/Feedbacks")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly DashContext _context;

        public FeedbackController(DashContext context)
        {
            _context = context;
        }
        
        [HttpGet("{yoloyeet}")]
        public async Task<ActionResult<List<Feedback>>> GetFeedback(int yoloyeet)
        {
            var a = await _context.Feedback.Where(s => s.AssignmentID == yoloyeet).ToListAsync();
            if (a == null)
            {
                var b = await _context.Feedback.ToListAsync();
                System.Console.WriteLine("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbbb");
                return Ok(b);
            }
            else
            {
                //System.Console.WriteLine("a");
                return Ok(a);
            }
        }
        /*public IEnumerable<Assignment> GetAssignment()
        {
            return _context.Assignment;
        }*/
    }
}

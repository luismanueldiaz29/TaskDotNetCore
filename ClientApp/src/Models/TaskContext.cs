using Microsoft.EntityFrameworkCore;

namespace TaskSharpHTTP.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) :base(options){}
        
        public DbSet<TaskItem> TaskItems { get; set; }
    }
}
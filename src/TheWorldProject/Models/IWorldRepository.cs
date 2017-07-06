using System.Collections.Generic;

namespace TheWorldProject.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
    }
}
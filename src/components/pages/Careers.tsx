import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const careers = [
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Hybrid',
    type: 'Full-time'
  }
];

const Careers: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>
          <p className="text-gray-600 text-center mb-12">
            We're always looking for talented individuals to join our growing team.
          </p>
          
          <div className="space-y-6">
            {careers.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Careers;
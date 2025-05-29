import {  FaBuilding, FaRoad, FaTools,FaMountain, FaLeaf, FaHardHat } from 'react-icons/fa';
const services = [
  {
    id:     'structural',
    icon:   <FaBuilding />,
    title:  'Structural Engineering',
    desc:   'Designs and analyzes building frameworks to ensure they can withstand loads and forces.Structural engineers ensure safety, stability, and code compliance.They work on foundations, beams, columns, and load-bearing walls.',
    delay:  100,
  },
  {
    id:     'civil',
    icon:   <FaRoad />,
    title:  'Civil Engineering',
    desc:   'Focuses on the planning, design, and construction of infrastructure like roads, bridges, and drainage.Civil engineers handle site grading, stormwater systems, and utility layout.They play a critical role in land development and environmental safety.',
    delay:  200,
  },
  {
    id:     'mep',
    icon:   <FaTools />,
    title:  'MEP Engineering',
    desc:   'Responsible for designing essential building systems like HVAC, power, lighting, and water supply.MEP engineers ensure comfort, energy efficiency, and code adherence.Their coordination is crucial for smooth construction and operation.',
    delay:  300,
  },
  {
    id:     'geotech',
    icon:   <FaMountain />,
    title:  'Geotechnical Engineering',
    desc:   'Analyzes soil, rock, and groundwater conditions to inform safe and cost-effective foundations.Geotechnical engineers perform soil testing, slope stability, and earthworks analysis.Their insights help prevent structural failures and ground-related issues.',
    delay:  400,
  },
  {
    id:     'enviro',
    icon:   <FaLeaf />,
    title:  'Environmental Engineering',
    desc:   'Focuses on minimizing the environmental impact of construction projects.This includes waste management, erosion control, and sustainability practices.They help meet environmental regulations and promote green building.',
    delay:  500,
  },
  {
    id:     'construction',
    icon:   <FaHardHat />,
    title:  'Construction Management',
    desc:   'Integrates engineering principles with project management to oversee timelines, costs, and quality.Construction engineers coordinate teams, resolve technical issues, and manage resources.They ensure that projects are completed safely, on time, and within budget.',
    delay:  600,
  },
];
export default services;

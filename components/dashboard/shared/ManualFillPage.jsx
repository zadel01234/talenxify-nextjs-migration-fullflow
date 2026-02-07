'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar, X, Search, Upload, User } from 'lucide-react';

const ManualFillPage = () => {
    const router = useRouter()
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);
    const [skills, setSkills] = useState([]);
    const [profileImage, setProfileImage] = useState(null);
    const [showExperienceForm, setShowExperienceForm] = useState(false);
    const [showEducationForm, setShowEducationForm] = useState(false);
    const [showSkillSearch, setShowSkillSearch] = useState(false);
    const [skillSearch, setSkillSearch] = useState('');
    const [showSkillDropdown, setShowSkillDropdown] = useState(false);
    const [currentExperience, setCurrentExperience] = useState({
        id: null,
        title: '',
        company: '',
        location: '',
        description: '',
        from: '',
        to: ''
    });
    const [currentEducation, setCurrentEducation] = useState({
        id: null,
        school: '',
        location: '',
        degree: ''
    });

    const jobTitles = [
        'Product Designer',
        'Lead Product Designer',
        'Senior Product Designer',
        'UI/UX Designer',
        'Web Designer',
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Software Engineer',
        'Project Manager'
    ];

    const locations = [
        'Lagos, Nigeria',
        'Abuja, Nigeria',
        'Port Harcourt, Nigeria',
        'Ibadan, Nigeria',
        'Remote',
        'New York, USA',
        'London, UK',
        'Toronto, Canada'
    ];

    const degrees = [
        'Bachelor of Arts',
        'Bachelor of Science',
        'Bachelor of Engineering',
        'Master of Arts',
        'Master of Science',
        'Master of Business Administration',
        'PhD'
    ];

    const availableSkills = [
        'Web Design', 'Mobile Design', 'UI/UX Design', 'Graphic Design', 'Product Design',
        'Prototyping', 'Wireframing', 'User Research', 'Interaction Design',
        'Web Development', 'Frontend Development', 'Backend Development', 'Full Stack Development',
        'App Development', 'Mobile Development', 'iOS Development', 'Android Development',
        'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js', 'Next.js',
        'Python', 'Java', 'C++', 'PHP', 'Ruby', 'Swift', 'Kotlin',
        'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap',
        'Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator',
        'Git', 'GitHub', 'Docker', 'AWS', 'Azure', 'Firebase',
        'SQL', 'MongoDB', 'PostgreSQL', 'MySQL',
        'REST API', 'GraphQL', 'Agile', 'Scrum', 'Project Management'
    ];

    const handleAddExperience = () => {
        setShowExperienceForm(true);
        setCurrentExperience({
            id: null,
            title: '',
            company: '',
            location: '',
            description: '',
            from: '',
            to: ''
        });
    };

    const handleSaveExperience = () => {
        if (currentExperience.title && currentExperience.company) {
            if (currentExperience.id) {
                setExperiences(experiences.map(exp =>
                    exp.id === currentExperience.id ? currentExperience : exp
                ));
            } else {
                setExperiences([...experiences, { ...currentExperience, id: Date.now() }]);
            }
            setShowExperienceForm(false);
            setCurrentExperience({
                id: null,
                title: '',
                company: '',
                location: '',
                description: '',
                from: '',
                to: ''
            });
        }
    };

    const handleEditExperience = (exp) => {
        setCurrentExperience(exp);
        setShowExperienceForm(true);
    };

    const handleDeleteExperience = (id) => {
        setExperiences(experiences.filter(exp => exp.id !== id));
    };

    const handleAddEducation = () => {
        setShowEducationForm(true);
        setCurrentEducation({
            id: null,
            school: '',
            location: '',
            degree: ''
        });
    };

    const handleSaveEducation = () => {
        if (currentEducation.school) {
            if (currentEducation.id) {
                setEducations(educations.map(edu =>
                    edu.id === currentEducation.id ? currentEducation : edu
                ));
            } else {
                setEducations([...educations, { ...currentEducation, id: Date.now() }]);
            }
            setShowEducationForm(false);
            setCurrentEducation({
                id: null,
                school: '',
                location: '',
                degree: ''
            });
        }
    };

    const handleAddSkill = (skillName) => {
        const skillExists = skills.some(s => s.name.toLowerCase() === skillName.toLowerCase());
        if (!skillExists) {
            setSkills([...skills, {
                id: Date.now() + Math.random(),
                name: skillName
            }]);
        }
        setSkillSearch('');
        setShowSkillDropdown(false);
    };

    const handleDeleteSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const filteredSkills = availableSkills.filter(skill =>
        skill.toLowerCase().includes(skillSearch.toLowerCase()) &&
        !skills.some(s => s.name.toLowerCase() === skill.toLowerCase())
    );

    const handleCancel = () => {
        router.back();
    };

    const handleSave = () => {
        console.log('Saving data:', { experiences, educations, skills, profileImage });
        router.push('/portfolio-upload');
    };

    return (
        <div className="min-h-screen bg-gray-50 mt-15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <div className="bg-transparent rounded-lg p-6 ">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Fill in Manually</h1>
                    <p className="text-gray-600 text-sm mb-6">Enter your details manually section by section.</p>

                    {/* Experience Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Experience</h2>
                            <button
                                onClick={handleAddExperience}
                                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm border border-indigo-600 rounded px-3 py-1.5"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </button>
                        </div>

                        {showExperienceForm && (
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <select
                                            value={currentExperience.title}
                                            onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="">Select job title</option>
                                            {jobTitles.map((title, idx) => (
                                                <option key={idx} value={title}>{title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                        <input
                                            type="text"
                                            value={currentExperience.company}
                                            onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
                                            placeholder="Enter company"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <select
                                        value={currentExperience.location}
                                        onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="">Select location</option>
                                        {locations.map((location, idx) => (
                                            <option key={idx} value={location}>{location}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        value={currentExperience.description}
                                        onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })}
                                        placeholder="Describe..."
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="date"
                                                value={currentExperience.from}
                                                onChange={(e) => setCurrentExperience({ ...currentExperience, from: e.target.value })}
                                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="date"
                                                value={currentExperience.to}
                                                onChange={(e) => setCurrentExperience({ ...currentExperience, to: e.target.value })}
                                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => setShowExperienceForm(false)}
                                        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveExperience}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}

                        {experiences.map((exp) => (
                            <div key={exp.id} className="bg-blue-50 rounded-lg p-4 mb-3">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">{exp.title} {exp.from && exp.to && `${new Date(exp.from).getFullYear()} - ${new Date(exp.to).getFullYear()}`}</h3>
                                        <p className="text-sm text-gray-600 uppercase">{exp.company}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEditExperience(exp)}
                                            className="text-indigo-600 hover:text-indigo-700"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteExperience(exp.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    {exp.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Education</h2>
                            <button
                                onClick={handleAddEducation}
                                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm border border-indigo-600 rounded px-3 py-1.5"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </button>
                        </div>

                        {showEducationForm && (
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                                    <input
                                        type="text"
                                        value={currentEducation.school}
                                        onChange={(e) => setCurrentEducation({ ...currentEducation, school: e.target.value })}
                                        placeholder="Select school"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <select
                                            value={currentEducation.location}
                                            onChange={(e) => setCurrentEducation({ ...currentEducation, location: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="">Enter location</option>
                                            {locations.map((location, idx) => (
                                                <option key={idx} value={location}>{location}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                                        <select
                                            value={currentEducation.degree}
                                            onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="">Select degree</option>
                                            {degrees.map((degree, idx) => (
                                                <option key={idx} value={degree}>{degree}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => setShowEducationForm(false)}
                                        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveEducation}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}

                        {educations.map((edu) => (
                            <div key={edu.id} className="bg-blue-50 rounded-lg p-4 mb-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                                        <p className="text-sm text-gray-600">{edu.degree}</p>
                                        <p className="text-sm text-gray-500">{edu.location}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-indigo-600 hover:text-indigo-700">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setEducations(educations.filter(e => e.id !== edu.id))}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
                            <button
                                onClick={() => setShowSkillSearch(!showSkillSearch)}
                                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm border border-indigo-600 rounded px-3 py-1.5"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </button>
                        </div>

                        {/* Skill Search */}
                        {showSkillSearch && (
                            <div className="mb-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={skillSearch}
                                        onChange={(e) => {
                                            setSkillSearch(e.target.value);
                                            setShowSkillDropdown(true);
                                        }}
                                        onFocus={() => setShowSkillDropdown(true)}
                                        placeholder="Search and add skills..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {/* Dropdown */}
                                {showSkillDropdown && skillSearch && filteredSkills.length > 0 && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                        {filteredSkills.slice(0, 10).map((skill, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAddSkill(skill)}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-sm"
                                            >
                                                {skill}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Selected Skills */}
                        {skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                    >
                                        {skill.name}
                                        <button
                                            onClick={() => handleDeleteSkill(skill.id)}
                                            className="hover:text-blue-900"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Upload Image Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Upload Image</h2>
                            <label className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm border border-indigo-600 rounded px-3 py-1.5 cursor-pointer">
                                <Plus className="w-4 h-4" />
                                Add
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Image Preview */}
                        {profileImage && (
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Profile Image</p>
                                    <p className="text-xs text-gray-600">Image uploaded successfully</p>
                                </div>
                                <button
                                    onClick={() => setProfileImage(null)}
                                    className="text-red-600 hover:text-red-700"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        {/* Empty State */}
                        {!profileImage && (
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hidden">
                                <User className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">No image uploaded</p>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 text-sm">
                        <button
                            onClick={handleCancel}
                            className="px-4 py-1.5 bg-gray-900 text-white rounded-sm hover:bg-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-14 py-1.5 bg-indigo-600 text-white rounded-sm hover:bg-indigo-700"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManualFillPage;
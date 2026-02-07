'use client'
import { useRouter } from 'next/navigation' 
import { useState } from 'react'
import { X, Plus, Edit2, Trash2, Search } from 'lucide-react'

const ResumeUploadPage = () => {
    const router = useRouter()
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [parsedData, setParsedData] = useState(null);
    const [skillSearch, setSkillSearch] = useState('');
    const [showSkillDropdown, setShowSkillDropdown] = useState(false);

    // Expanded list of skills
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

    const handleBack = () => {
        router.back();
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.size <= 10 * 1024 * 1024) {
                setSelectedFile(file);
            } else {
                alert('File size must be less than 10MB');
            }
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size <= 10 * 1024 * 1024) {
                setSelectedFile(file);
            } else {
                alert('File size must be less than 10MB');
            }
        }
    };

    const parseResume = async (file) => {
        setIsProcessing(true);

        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target.result;

            // Parse the resume text for different sections
            const parsed = {
                experience: extractExperience(text),
                education: extractEducation(text),
                skills: extractSkills(text),
            };

            setParsedData(parsed);
            setIsProcessing(false);
        };

        reader.readAsText(file);
    };

    const extractExperience = (text) => {
        const lines = text.split('\n');
        const experiences = [];
        let inExperienceSection = false;
        let currentExperience = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            const lowerLine = line.toLowerCase();

            // Detect start of experience section
            if (lowerLine.includes('experience') || lowerLine.includes('work history') || lowerLine.includes('employment')) {
                inExperienceSection = true;
                continue;
            }

            // Detect end of experience section
            if (inExperienceSection && (lowerLine.includes('education') || lowerLine.includes('skills') || lowerLine.includes('projects') || lowerLine.includes('certifications'))) {
                if (currentExperience && currentExperience.title) {
                    experiences.push(currentExperience);
                }
                break;
            }

            if (inExperienceSection && line) {
                // Detect job title (usually first non-empty line after section header)
                if (!currentExperience || (currentExperience.title && currentExperience.company && currentExperience.period && currentExperience.description.length > 0)) {
                    if (currentExperience && currentExperience.title) {
                        experiences.push(currentExperience);
                    }
                    currentExperience = {
                        id: Date.now() + Math.random(),
                        title: line,
                        company: '',
                        period: '',
                        description: []
                    };
                }
                // Detect company name (second line, often in CAPS or has common company indicators)
                else if (currentExperience.title && !currentExperience.company) {
                    currentExperience.company = line;
                }
                // Detect period (contains years like 2020-2024 or Jan 2020 - Dec 2024)
                else if (currentExperience.company && !currentExperience.period && /\d{4}/.test(line)) {
                    currentExperience.period = line;
                }
                // Collect description points (lines starting with • - or regular text)
                else if (currentExperience.period) {
                    if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
                        currentExperience.description.push(line.replace(/^[•\-*]\s*/, ''));
                    } else if (line.length > 20) { // Regular description text
                        currentExperience.description.push(line);
                    }
                }
            }
        }

        // Add last experience if exists
        if (currentExperience && currentExperience.title) {
            experiences.push(currentExperience);
        }

        return experiences.length > 0 ? experiences : [{
            id: Date.now(),
            title: '',
            company: '',
            period: '',
            description: []
        }];
    };

    const extractEducation = (text) => {
        const lines = text.split('\n');
        const educations = [];
        let inEducationSection = false;
        let currentEducation = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            const lowerLine = line.toLowerCase();

            // Detect start of education section
            if (lowerLine.includes('education') || lowerLine.includes('academic')) {
                inEducationSection = true;
                continue;
            }

            // Detect end of education section
            if (inEducationSection && (lowerLine.includes('experience') || lowerLine.includes('skills') || lowerLine.includes('projects') || lowerLine.includes('certifications'))) {
                if (currentEducation && currentEducation.title) {
                    educations.push(currentEducation);
                }
                break;
            }

            if (inEducationSection && line) {
                // Detect degree (first line in education entry)
                if (!currentEducation || (currentEducation.title && currentEducation.company && currentEducation.period)) {
                    if (currentEducation && currentEducation.title) {
                        educations.push(currentEducation);
                    }
                    currentEducation = {
                        id: Date.now() + Math.random(),
                        title: line,
                        company: '',
                        period: ''
                    };
                }
                // Detect university name
                else if (currentEducation.title && !currentEducation.company) {
                    currentEducation.company = line;
                }
                // Detect graduation year
                else if (currentEducation.company && !currentEducation.period && /\d{4}/.test(line)) {
                    currentEducation.period = line;
                }
            }
        }

        // Add last education if exists
        if (currentEducation && currentEducation.title) {
            educations.push(currentEducation);
        }

        return educations.length > 0 ? educations : [{
            id: Date.now(),
            title: '',
            company: '',
            period: ''
        }];
    };

    const extractSkills = (text) => {
        const skills = [];
        const lowerText = text.toLowerCase();

        availableSkills.forEach(skill => {
            if (lowerText.includes(skill.toLowerCase())) {
                skills.push({
                    id: Date.now() + Math.random(),
                    name: skill
                });
            }
        });

        return skills;
    };

    const handleUpload = async () => {
        if (selectedFile) {
            await parseResume(selectedFile);
        }
    };

    const addExperience = () => {
        setParsedData(prev => ({
            ...prev,
            experience: [...prev.experience, {
                id: Date.now(),
                title: '',
                company: '',
                period: '',
                description: []
            }]
        }));
    };

    const addEducation = () => {
        setParsedData(prev => ({
            ...prev,
            education: [...prev.education, {
                id: Date.now(),
                title: '',
                company: '',
                period: ''
            }]
        }));
    };

    const deleteItem = (type, id) => {
        setParsedData(prev => ({
            ...prev,
            [type]: prev[type].filter(item => item.id !== id)
        }));
    };

    const deleteSkill = (id) => {
        setParsedData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill.id !== id)
        }));
    };

    const addSkill = (skillName) => {
        // Check if skill already exists
        const skillExists = parsedData.skills.some(s => s.name.toLowerCase() === skillName.toLowerCase());
        if (!skillExists) {
            setParsedData(prev => ({
                ...prev,
                skills: [...prev.skills, {
                    id: Date.now() + Math.random(),
                    name: skillName
                }]
            }));
        }
        setSkillSearch('');
        setShowSkillDropdown(false);
    };

    const updateItem = (type, id, field, value) => {
        setParsedData(prev => ({
            ...prev,
            [type]: prev[type].map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const filteredSkills = availableSkills.filter(skill =>
        skill.toLowerCase().includes(skillSearch.toLowerCase()) &&
        !parsedData?.skills.some(s => s.name.toLowerCase() === skill.toLowerCase())
    );

    const handleSaveAndContinue = () => {;
        console.log('Saving parsed data:', parsedData)
        router.push('/portfolio-upload')
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                <button
                    onClick={handleBack}
                    className="mb-4 sm:mb-6 text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 text-sm sm:text-base"
                >
                    ← Back
                </button>

                <div className="bg-transparent px-2 sm:px-6 py-4 sm:py-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Auto-Generate from Resume
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Upload your resume and we'll automatically extract your details into your profile.
                    </p>
                </div>

                <div className="bg-transparent px-2 sm:px-6 py-4 sm:py-6">
                    <div
                        className={`border-2 border-dashed rounded-lg p-6 sm:p-12 text-center transition-all ${dragActive
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-300 bg-gray-200 hover:border-indigo-400 hover:bg-indigo-50'
                            }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                <svg
                                    className="w-12 h-12 sm:w-16 sm:h-16 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                            </div>

                            {selectedFile ? (
                                <div className="mb-4 w-full">
                                    <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base break-words">
                                        Selected file: {selectedFile.name}
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm mb-2">
                                        Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium"
                                    >
                                        Remove file
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                                        Drag your file(s) or{' '}
                                        <label className="text-green-600 hover:text-green-700 cursor-pointer font-medium">
                                            browse
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf,.doc,.docx,.txt"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm">
                                        Max 10 MB files are allowed
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-6 text-center">
                        <p className="text-xs sm:text-sm text-gray-500">
                            Supported formats: PDF, DOC, DOCX, TXT
                        </p>
                    </div>

                    {selectedFile && !parsedData && (
                        <div className="mt-4 sm:mt-6">
                            <button
                                onClick={handleUpload}
                                disabled={isProcessing}
                                className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold disabled:bg-gray-400 text-sm sm:text-base"
                            >
                                {isProcessing ? 'Processing...' : 'Upload and Generate Profile'}
                            </button>
                        </div>
                    )}
                </div>

                {/* Parsed Data Display - Shows below upload box */}
                {parsedData && (
                    <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 mt-6 sm:mt-8">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Review Your Profile</h1>

                        {/* Experience Section */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <h2 className="text-base sm:text-lg font-bold text-gray-900">Experience</h2>
                                <button
                                    onClick={addExperience}
                                    className="flex items-center gap-1 sm:gap-2 text-indigo-600 hover:text-indigo-700 text-xs sm:text-sm"
                                >
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                    Add
                                </button>
                            </div>

                            {parsedData.experience.map((exp) => (
                                <div key={exp.id} className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 relative">
                                    <div className="flex justify-end gap-2 mb-2">
                                        <button className="text-indigo-600 hover:text-indigo-700">
                                            <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteItem('experience', exp.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </div>

                                    <input
                                        type="text"
                                        value={exp.title}
                                        onChange={(e) => updateItem('experience', exp.id, 'title', e.target.value)}
                                        className="w-full font-semibold text-sm sm:text-base text-gray-900 bg-transparent border-none focus:outline-none mb-1"
                                        placeholder="Job Title"
                                    />
                                    <input
                                        type="text"
                                        value={exp.company}
                                        onChange={(e) => updateItem('experience', exp.id, 'company', e.target.value)}
                                        className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border-none focus:outline-none mb-1"
                                        placeholder="Company Name"
                                    />
                                    <input
                                        type="text"
                                        value={exp.period}
                                        onChange={(e) => updateItem('experience', exp.id, 'period', e.target.value)}
                                        className="w-full text-xs sm:text-sm text-gray-500 bg-transparent border-none focus:outline-none mb-2"
                                        placeholder="2020 - 2025"
                                    />

                                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600">
                                        {exp.description.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Education Section */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <h2 className="text-base sm:text-lg font-bold text-gray-900">Education</h2>
                                <button
                                    onClick={addEducation}
                                    className="flex items-center gap-1 sm:gap-2 text-indigo-600 hover:text-indigo-700 text-xs sm:text-sm"
                                >
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                    Add
                                </button>
                            </div>

                            {parsedData.education.map((edu) => (
                                <div key={edu.id} className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 relative">
                                    <div className="flex justify-end gap-2 mb-2">
                                        <button className="text-indigo-600 hover:text-indigo-700">
                                            <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteItem('education', edu.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </div>

                                    <input
                                        type="text"
                                        value={edu.title}
                                        onChange={(e) => updateItem('education', edu.id, 'title', e.target.value)}
                                        className="w-full font-semibold text-sm sm:text-base text-gray-900 bg-transparent border-none focus:outline-none mb-1"
                                        placeholder="Degree"
                                    />
                                    <input
                                        type="text"
                                        value={edu.company}
                                        onChange={(e) => updateItem('education', edu.id, 'company', e.target.value)}
                                        className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border-none focus:outline-none"
                                        placeholder="University Name"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Skills Section */}
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                                Select skills (minimum of 5 skills)
                            </h2>

                            {/* Skill Search Box */}
                            <div className="relative mb-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={skillSearch}
                                        onChange={(e) => {
                                            setSkillSearch(e.target.value);
                                            setShowSkillDropdown(true);
                                        }}
                                        onFocus={() => setShowSkillDropdown(true)}
                                        placeholder="Search and add skills..."
                                        className="w-full pl-9 sm:pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {/* Dropdown */}
                                {showSkillDropdown && skillSearch && filteredSkills.length > 0 && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                        {filteredSkills.slice(0, 10).map((skill, index) => (
                                            <button
                                                key={index}
                                                onClick={() => addSkill(skill)}
                                                className="w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                                            >
                                                {skill}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Selected Skills */}
                            <div className="flex flex-wrap gap-2">
                                {parsedData.skills.map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                                    >
                                        {skill.name}
                                        <button
                                            onClick={() => deleteSkill(skill.id)}
                                            className="hover:text-blue-900"
                                        >
                                            <X className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={handleSaveAndContinue}
                                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm sm:text-base"
                            >
                                Save & Continue
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeUploadPage;
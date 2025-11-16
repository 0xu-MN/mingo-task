import React from 'react';
import { ChevronDown, Globe, Laptop, Briefcase, Zap, Feather, Paintbrush, Video, Lightbulb } from 'lucide-react'; 


const categories = [
  { label: "전체", value: "all", icon: Globe },
  { label: "인문학", value: "humanities", icon: Lightbulb },
  { label: "스타트업", value: "startup", icon: Briefcase },
  { label: "IT/프로그래밍", value: "it_programming", icon: Laptop },
  { label: "서비스/전략/기획", value: "strategy", icon: Zap },
  { label: "마케팅", value: "marketing", icon: Feather },
  { label: "디자인/일러스트", value: "design", icon: Paintbrush },
  { label: "자기계발", value: "self_improvement", icon: ChevronDown }, 
];


function SidebarForm(props) { 
    const activeCategory = props.activeCategory || 'all'; 
    const onSelectCategory = props.onSelectCategory;

    return (
        <div className="p-4 rounded-lg bg-black text-white h-full shadow-lg"> 
            
            <div className="flex items-center justify-between mb-4">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-white">카테고리<ChevronDown/></h3>
               
            </div>

            
            <div className="space-y-1"> 
                
                <div> 
                    <ul className="space-y-1">
                        {categories.map((category) => {
                            const Icon = category.icon; 
                            
                            return (
                                <li 
                                    key={category.value}
                                    className={`cursor-pointer text-sm p-2 rounded-md transition-colors flex items-center 
                                                ${activeCategory === category.value 
                                                    ? 'bg-gray-700/50 boder-none text-white font-semibold' 
                                                    : 'text-gray-300 hover:bg-gray-700'
                                                }`}
                                    onClick={() => onSelectCategory && onSelectCategory(category.value)}
                                >
                                    <Icon className="w-4 h-4 mr-3" />
                                    {category.label}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default SidebarForm;
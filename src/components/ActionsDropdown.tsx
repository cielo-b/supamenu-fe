// src/components/ActionsDropdown.tsx
import { useState, useRef, useEffect } from "react";
import { Eye, MoreVertical, Edit, Trash2, FileText, Download } from "lucide-react";

interface ActionsDropdownProps {
  clientId: number;
}

const ActionsDropdown = ({ clientId }: ActionsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleActionClick = (action: string) => {
    console.log(`Action ${action} clicked for client ${clientId}`);
    setIsOpen(false);
    // Add your action handlers here
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-amber-600 p-1 rounded-full"
      >
        <MoreVertical size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
          <div className="py-1">
            <button
              onClick={() => handleActionClick("view")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </button>
            <button
              onClick={() => handleActionClick("edit")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Client
            </button>
            <button
              onClick={() => handleActionClick("report")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </button>
            <button
              onClick={() => handleActionClick("export")}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </button>
            <div className="border-t border-gray-200"></div>
            <button
              onClick={() => handleActionClick("delete")}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Client
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
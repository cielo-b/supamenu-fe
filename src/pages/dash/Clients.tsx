import { DownloadCloudIcon, FilterIcon, Plus, SortAsc } from "lucide-react";
import Layout from "./Layout";
import { clients } from "../../constants/constants";
import CreateClientModal from "../../modals/CreateClientModal";
import { useState } from "react";
import ActionsDropdown from "../../components/ActionsDropdown";

const Client = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClient = () => {};

  return (
    <Layout title="Clients" activeTab="Clients">
      <div className="space-y-6">
        {/* New Client Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">New Client</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-amber-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              <Plus size={18} />
              <span>Add a new client</span>
            </button>

            <CreateClientModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onCreate={handleCreateClient}
            />
          </div>
        </section>

        {/* All Clients Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Clients</h2>
            <div className="flex gap-4 items-center">
              <div className="flex items-center hover:text-amber-500 cursor-pointer gap-2">
                <SortAsc className="text-gray-600" />
                <h1>Sort</h1>
              </div>
              <div className="flex items-center hover:text-amber-500 cursor-pointer gap-2">
                <FilterIcon className="text-gray-600"></FilterIcon>
                <h1>Filter</h1>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="w-full overflow-x-auto overflow-y-auto max-h-[calc(100vh-200px)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-4 text-sm font-semibold text-gray-600">
                    Client
                  </th>
                  <th className="p-4 text-sm font-semibold text-gray-600 text-right">
                    Last Updated
                  </th>
                  <th className="p-4 text-sm font-semibold text-gray-600 text-right">
                    Detailed Report
                  </th>
                  <th className="px-12 py-4 text-sm font-semibold text-gray-600 text-right">
                    Category
                  </th>
                  <th className="p-4 text-sm font-semibold text-gray-600 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.slice(0, 10).map((client, index) => (
                  <tr
                    key={index}
                    className={`border-b border-b-gray-200 cursor-pointer ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="p-4">
                      <h3 className="font-medium">{client.name}</h3>

                      <p className="text-amber-600 font-medium mt-1">
                        {client.amount}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <p className="text-sm text-gray-500">{client.updated}</p>
                      <p className="text-sm text-gray-500">{client.date}</p>
                    </td>
                    <td className="px-16 py-4 text-right">
                      <button className="text-gray-400 cursor-pointer hover:text-amber-600">
                        <DownloadCloudIcon size={18} />
                      </button>
                    </td>
                    <td className="p-4 text-right">
                      <span className="py-0.5 px-3 w-32 text-amber-500 border border-amber-500 rounded-sm inline-block text-center">
                        {client.category}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <ActionsDropdown clientId={client.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Client;

<template>
  <section class="h-screen" id="adminProjects">
    <div class="h-full w-full">
      <div class="max-w-screen-2xl px-4 mx-auto py-32">
        <div class="block md:flex gap-4 ">
            <div class="relative w-auto md:w-80 mb-4">
          <input
            type="search"
            class="p-2.5 h-full w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search projects"
            required
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            id="updateProductButton" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal"
            class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 me-2 mb-2 dark:bg-blue-600"
          >
            Add project
          </button>
            <Modal/>
        </div>
        </div>

        <div class="relative overflow-x-auto">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3 bg-blue-700 text-white">
                  Projects
                </th>
                <th scope="col" class="px-6 py-3 bg-blue-700 text-white">
                  Clients
                </th>
                <th scope="col" class="px-6 py-3 bg-blue-700 text-white">
                  Total Floor Area (sqm)
                </th>
                <th scope="col" class="px-6 py-3 bg-blue-700 text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lucena City
                </th>
                <td class="px-6 py-4">Rances Residence</td>
                <td class="px-6 py-4">408 sqm</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Nueva Vizcaya
                </th>
                <td class="px-6 py-4">Commercial Building</td>
                <td class="px-6 py-4">187 sqm</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

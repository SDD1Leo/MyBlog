function Contactcards(props) {
  return (
    <div class="mb-6 flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">

      <div class="flex flex-col gap-2 p-4 lg:p-6">
        <span class="text-lg text-gray-900">Username : {props.un}</span>

        <h2 class="text-lg text-gray-800">
          <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Email : {props.e}</a>
        </h2>

        <p class="text-gray-500">Message : {props.m}</p>

      </div>
    </div>
  );
}

export default Contactcards;
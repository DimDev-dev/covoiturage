const Contact = () => {
  return (
    <div className="py-6 w-1/4 h-full">
      <div className="max-w-md w-full space-y-8 p-8 bg-slate-300 shadow-lg rounded-lg backdrop-blur-sm bg-opacity-20">
        <h2 className="text-2xl font-bold text-center text-slate-950">
          Contactez-nous
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1 text-zinc-950 font-semibold"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-1 text-zinc-950 font-semibold"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-zinc-950 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Passez votre message ici ..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
              rows="6"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

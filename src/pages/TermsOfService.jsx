export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-700">
            Welcome to Discount Store! By using our website, you agree to the
            following terms and conditions:
          </p>
          <ol className="list-decimal ml-8 mt-4 text-gray-700">
            <li>You agree not to misuse our services.</li>
            <li>All purchases are subject to availability.</li>
            <li>We reserve the right to modify or discontinue any service.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

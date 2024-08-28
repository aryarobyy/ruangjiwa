import LoadingSection from "../system/LoadingSection";

const Sources = ({data, isGettingData}) => {
  return (
    <div className="overflow-auto max-h-[250px] rounded-md border border-default-200 bg-white dark:bg-default-50 text-dark">
      <div className="flex items-center justify-between border-b border-default-200 px-4 py-3">
        <h4 className="text-lg text-default-900">Report</h4>
      </div>
      <div>

        {
          isGettingData ? (
            <div className="w-full h-[90px] flex justify-center items-center">
              <LoadingSection />
            </div>
          ) : (
            <table className="w-full">
              <thead className="border-b border-default-200 bg-default-100">
                <tr>
                  <th className="p-2 text-start text-sm font-semibold text-default-900">
                    Nama
                  </th>
                  <th className="p-2 text-start text-sm font-semibold text-default-900">
                    Total Artikel
                  </th>
                  <th className="p-2 text-start text-sm font-semibold text-default-900">
                    Total Konsultasi
                  </th>
                </tr>
              </thead>
                <tbody className="divide-y dark:divide-default-200">
                  {
                    data?.map((source, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="p-2">{source.author}</td>
                          <td className="p-2">{source.sumArtikel}</td>
                          <td className="p-2">{source.sumKonsul}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
            </table>
          )
        }
      </div>
    </div>
  );
};

export default Sources;

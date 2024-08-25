import Link from "next/link";
import { sources } from "../../app/(protected)/admin/dashboard/data";
import { LuUpload } from "react-icons/lu";
import Button from "../ui/Button";

const Sources = () => {
  return (
    <div className="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50 text-dark">
      <div className="flex items-center justify-between border-b border-default-200 px-4 py-3">
        <h4 className="text-lg text-default-900">Sources</h4>
        <Button >
          <Link href="#" className="flex justify-center items-center gap-3">
            Export <LuUpload className="ms-1.5 size-4" />
          </Link>
        </Button>
      </div>
      <div>
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
            {sources.map((source, idx) => {
              return (
                <tr key={idx}>
                  <td className="p-2">{source.type}</td>
                  <td className="p-2">{source.session}</td>
                  <td className="p-2">{source.view}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sources;

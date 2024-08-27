'use client';
import Image from "next/image";
import Link from "next/link";
import { LuEye, LuPartyPopper } from "react-icons/lu";

import dashboardHero from "@/assets/images/other/dashboard-hero.png";
import { useAuth } from "@/context/AuthContext";

const ProgressCard = () => {
  const {user} = useAuth();

  return (
    <div className="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50">
      <div
        className="inline-flex w-full items-center bg-green-600/10 px-4 py-3 text-sm text-green-600"
        role="alert"
      >
        <LuPartyPopper className="me-2 size-4" />
        <span>{`Halo ${user?.name}`}</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-4 items-center justify-between">
          <div className="col-span-3 h-full">
            <div className="flex h-full flex-col items-start">
              <div className="mb-4 grow">
                <p className="text-lg text-default-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores pariatur eaque sint soluta quae illum ut sit suscipit facere quas
                </p>
              </div>
              <Link
                href=""
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-6 py-2 text-center text-sm text-white transition-all hover:bg-primary-600"
              >
                View Profile
                <LuEye className="ms-1 size-4" />
              </Link>
            </div>
          </div>
          <div>
            <Image
              alt="dashboardHero"
              src={dashboardHero}
              className="h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;

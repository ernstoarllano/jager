import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import Card from 'components/Card'
import Image from 'next/image'
import { formatCompany } from 'utils/formatCompany'
import { formatRole } from 'utils/formateRole'
import { formatLogo } from 'utils/formatLogo'
import { formatWebsite } from 'utils/formatWebsite'

const Offers = ({ offers }: any) => {
  return (
    <Card>
      <h3>Offers</h3>
      {offers && offers.length > 0 ? (
        <div className="space-y-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="lg:flex lg:items-center lg:justify-between p-5 rounded-2xl even:bg-gray-50"
            >
              <div className="lg:w-10/12">
                <div className="flex items-center space-x-3">
                  {offer.company.logo && (
                    <a
                      className="flex flex-col items-center relative"
                      href={formatWebsite(offer.company)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={formatLogo(offer.company)}
                        alt={formatCompany(offer.company)}
                        width={40}
                        height={40}
                      />
                    </a>
                  )}
                  <div>
                    <span className="block font-medium">
                      {formatRole(offer.role)}
                    </span>
                    <span className="block text-sm text-purple-700">
                      {formatCompany(offer.company)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/12">
                <CheckBadgeIcon className="w-8 h-8 stroke-green-500 ml-auto mr-0" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-800">
                There are no offers, keep trying!
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

export default Offers

import Image from 'next/image'
import { formatCompany } from 'utils/formatCompany'
import { formatLogo } from 'utils/formatLogo'
import { formatWebsite } from 'utils/formatWebsite'

const Profile = ({ company }: any) => {
  return (
    <section className="p-10 space-y-12">
      <div className="flex items-center space-x-6">
        <div>
          <Image
            src={formatLogo(company)}
            alt={formatCompany(company)}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1>
            <a
              href={formatWebsite(company)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formatCompany(company)}
            </a>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Profile

import { ReactComponent as LinkIcon } from '../../shared/assets/icons/link-icon.svg';

export default function DescriptionLink({ site }: { site: string }) {
  let link = `https://${site}`;
  if (site.startsWith('https://')) {
    link = site;
  }
  return (
    <div className="flex flex-row flex-nowrap">
      <LinkIcon />
      <a className="text-blue-700 ml-1 mr-5 hover:underline" href={link}>
        {site}
      </a>
    </div>
  );
}

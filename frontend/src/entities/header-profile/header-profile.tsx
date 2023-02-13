import HeaderDesription from './header-description';
import StickyHeader from './sticky-header';

export default function HeaderProfile() {
  return (
    <div className="flex flex-row flex-wrap border-b">
      <StickyHeader />
      <HeaderDesription />
    </div>
  );
}

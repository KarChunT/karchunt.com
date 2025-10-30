// import { getPageMap } from 'nextra/page-map';
// import DocsBtnSidebar from '@/components/DocsBtnSidebar';

const DocsLayout = async ({ children }) => {
  // const pageMap = await getPageMap('/docs');
  return (
    <div>
      {children}
      {/* <div className="xl:hidden">
        <DocsBtnSidebar pageMap={pageMap} />
      </div> */}
    </div>
  );
};

export default DocsLayout;

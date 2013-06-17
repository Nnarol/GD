#if defined(GD_IDE_ONLY)
#include "GDCore/CommonTools.h"
#include "Exporter.h"
#include "GDL/IDE/Dialogs/ProjectExportDialog.h"
#include <wx/intl.h>

void Exporter::ShowProjectExportDialog(gd::Project & project)
{
    ProjectExportDialog dialog(NULL, project);
    dialog.ShowModal();
}

std::string Exporter::GetProjectExportButtonLabel()
{
    return gd::ToString(_("Compile to an native executable"));
}

Exporter::~Exporter()
{
    //dtor
}
#endif

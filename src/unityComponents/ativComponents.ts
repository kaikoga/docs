import UnityComponentItem from '@site/src/unityComponentItem';

const ativComponents: UnityComponentItem[] = [
  {
    id: "uc:AtivGenerateDynamics",
    displayName: "ATiV Generate VRM0+1 SpringBone",
    link: "/ativ/components/ativ_generate_vrm_springbone"
  },
  {
    id: "uc:AtivGenerateDynamicsCollider",
    displayName: "ATiV Generate VRM0+1 SpringBone Collider",
    link: "/ativ/components/ativ_generate_vrm_springbone_collider"
  },
  {
    id: "uc:AtivGenerateDynamicsColliderGroup",
    displayName: "ATiV Generate VRM0+1 SpringBone Collider Group",
    link: "/ativ/components/ativ_generate_vrm_springbone_collider_group"
  },
  {
    id: "uc:AtivGenerateConstraint",
    displayName: "ATiV Generate VRM1 Constraint",
    link: "/ativ/components/ativ_generate_vrm1_constraint"
  },
  {
    id: "uc:AtivReduceDynamics",
    displayName: "ATiV Reduce VRC PhysBones",
    link: "/ativ/ndmf_components/ativ_reduce_vrc_physbones"
  },
  {
    id: "uc:AtivDeleteAllVRCPhysBones",
    displayName: "ATiV Delete All VRC PhysBones",
    link: "/ativ/ndmf_components/ativ_delete_all_vrc_physbones"
  },
  {
    id: "uc:AtivDisableAtivComponents",
    displayName: "ATiV Disable ATiV Components",
    link: "/ativ/ndmf_components/ativ_disable_ativ_components"
  },
  {
    id: "uc:AtivOverwriteVRMMeta",
    displayName: "ATiV Overwrite VRM0+1 Meta",
    link: "/ativ/ndmf_components/ativ_overwrite_vrm_meta"
  },
  {
    id: "uc:AtivDefaultVRMFirstPerson",
    displayName: "ATiV Default VRM0+1 FirstPerson",
    link: "/ativ/ndmf_components/ativ_default_vrm_firstperson"
  },
  {
    id: "uc:AtivMergeVRMFirstPerson",
    displayName: "ATiV Merge VRM0+1 FirstPerson",
    link: "/ativ/ndmf_components/ativ_merge_vrm_firstperson"
  },
  {
    id: "uc:AtivMergeVRM1SpringBones",
    displayName: "ATiV Merge VRM1 SpringBones",
    link: "/ativ/ndmf_components/ativ_merge_vrm1_springbones"
  },
  {
    id: "uc:AtivExportVRMUI",
    displayName: "ATiV Export VRM0+1 UI",
    link: "/ativ/ndmf_components/ativ_export_vrm_ui"
  },
].map((x: any) => {
  x.className = "ucLinkATiV";
  return x;
});

export default ativComponents;

import UnityComponentItem from '@site/src/unityComponentItem';

const ativComponents: UnityComponentItem[] = [
  {
    id: "ativ:AtivGenerateDynamics",
    displayName: "ATiV Generate VRM0+1 SpringBone",
    link: "/ativ/components/ativ_generate_vrm_springbone"
  },
  {
    id: "ativ:AtivGenerateDynamicsCollider",
    displayName: "ATiV Generate VRM0+1 SpringBone Collider",
    link: "/ativ/components/ativ_generate_vrm_springbone_collider"
  },
  {
    id: "ativ:AtivGenerateDynamicsColliderGroup",
    displayName: "ATiV Generate VRM0+1 SpringBone Collider Group",
    link: "/ativ/components/ativ_generate_vrm_springbone_collider_group"
  },
  {
    id: "ativ:AtivGenerateConstraint",
    displayName: "ATiV Generate VRM1 Constraint",
    link: "/ativ/components/ativ_generate_vrm1_constraint"
  },
  {
    id: "ativ:AtivSimpleWear",
    displayName: "ATiV Simple Wear",
    link: "/ativ/components/ativ_simple_wear"
  },
  {
    id: "ativ:AtivReduceDynamics",
    displayName: "ATiV Reduce VRC PhysBones",
    link: "/ativ/ndmf_components/ativ_reduce_vrc_physbones"
  },
  {
    id: "ativ:AtivDeleteAllVRCPhysBones",
    displayName: "ATiV Delete All VRC PhysBones",
    link: "/ativ/ndmf_components/ativ_delete_all_vrc_physbones"
  },
  {
    id: "ativ:AtivDisableAtivComponents",
    displayName: "ATiV Disable ATiV Components",
    link: "/ativ/ndmf_components/ativ_disable_ativ_components"
  },
  {
    id: "ativ:AtivOverwriteVRMMeta",
    displayName: "ATiV Overwrite VRM0+1 Meta",
    link: "/ativ/ndmf_components/ativ_overwrite_vrm_meta"
  },
  {
    id: "ativ:AtivDefaultVRMFirstPerson",
    displayName: "ATiV Default VRM0+1 FirstPerson",
    link: "/ativ/ndmf_components/ativ_default_vrm_firstperson"
  },
  {
    id: "ativ:AtivMergeVRMFirstPerson",
    displayName: "ATiV Merge VRM0+1 FirstPerson",
    link: "/ativ/ndmf_components/ativ_merge_vrm_firstperson"
  },
  {
    id: "ativ:AtivMergeVRM1SpringBones",
    displayName: "ATiV Merge VRM1 SpringBones",
    link: "/ativ/ndmf_components/ativ_merge_vrm1_springbones"
  },
  {
    id: "ativ:AtivExportVRMUI",
    displayName: "ATiV Export VRM0+1 UI",
    link: "/ativ/ndmf_components/ativ_export_vrm_ui"
  },
].map((x: any) => {
  x.classNames = ["ucLinkATiV"];
  return x;
});

export default ativComponents;

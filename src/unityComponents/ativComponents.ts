import UnityComponentItem from '@site/src/unityComponentItem';

const ativComponents: UnityComponentItem[] = [
  {
    id: "ativ:AvatarTinkerVista",
    displayName: "Avatar Tinker Vista",
    link: "/ativ",
  },
  {
    id: "ativ:AvatarTinkerVistaExtension",
    displayName: "Avatar Tinker Vista - Extension",
    link: "/ativ/extension",
  },
  {
    id: "ativ:AtivGenerateDynamics",
    displayName: "ATiV Generate Dynamics",
    link: "/ativ/components/ativ_generate_vrm_springbone"
  },
  {
    id: "ativ:AtivGenerateDynamicsCollider",
    displayName: "ATiV Generate Dynamics Collider",
    link: "/ativ/components/ativ_generate_vrm_springbone_collider"
  },
  {
    id: "ativ:AtivGenerateDynamicsColliderGroup",
    displayName: "ATiV Generate Dynamics Collider Group",
    link: "/ativ/components/ativ_generate_vrm_springbone_collider_group"
  },
  {
    id: "ativ:AtivSelectDynamics",
    displayName: "ATiV Select Dynamics",
    link: "/ativ/components/ativ_select_dynamics"
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
    link: "/ativ/components/ativ_reduce_vrc_physbones"
  },
  {
    id: "ativ:AtivDeleteAllVRCPhysBones",
    displayName: "ATiV Delete All VRC PhysBones",
    link: "/ativ/components/ativ_delete_all_vrc_physbones"
  },
  {
    id: "ativ:AtivDisableAtivComponents",
    displayName: "ATiV Disable ATiV Components",
    link: "/ativ/components/ativ_disable_ativ_components"
  },
  {
    id: "ativ:AtivOverwriteViewPosition",
    displayName: "ATiV Overwrite View Position",
    link: "/ativ/components/ativ_overwrite_view_position"
  },
  {
    id: "ativ:AtivOverwriteVisemes",
    displayName: "ATiV Overwrite Visemes",
    link: "/ativ/components/ativ_overwrite_visemes"
  },
  {
    id: "ativ:AtivOverwriteVRCBlink",
    displayName: "ATiV Overwrite VRC Blink",
    link: "/ativ/components/ativ_overwrite_vrc_blink"
  },
  {
    id: "ativ:AtivOverwriteVRMMeta",
    displayName: "ATiV Overwrite VRM0+1 Meta",
    link: "/ativ/components/ativ_overwrite_vrm_meta"
  },
  {
    id: "ativ:AtivDefaultVRMFirstPerson",
    displayName: "ATiV Default VRM0+1 FirstPerson",
    link: "/ativ/components/ativ_default_vrm_firstperson"
  },
  {
    id: "ativ:AtivMergeVRMFirstPerson",
    displayName: "ATiV Merge VRM0+1 FirstPerson",
    link: "/ativ/components/ativ_merge_vrm_firstperson"
  },
  {
    id: "ativ:AtivMergeVRM1SpringBones",
    displayName: "ATiV Merge VRM1 SpringBones",
    link: "/ativ/components/ativ_merge_vrm1_springbones"
  },
  {
    id: "ativ:AtivExportAvatarUI",
    displayName: "ATiV Export Avatar UI",
    link: "/ativ/components/ativ_export_avatar_ui"
  },
  {
    id: "ativ:AtivTargetPlatform",
    displayName: "ATiV Target Platform",
    link: "/ativ/components/ativ_target_platform"
  },
  {
    id: "ativ:AtivTargetUnityPlatform",
    displayName: "ATiV Target Unity Platform",
    link: "/ativ/components/ativ_target_platform#unity"
  },
  {
    id: "ativ:AtivTargetNdmfPlatform",
    displayName: "ATiV Target NDMF Platform",
    link: "/ativ/components/ativ_target_platform#ndmf"
  },
  {
    id: "ativ:AtivTargetAbletPlatform",
    displayName: "ATiV Target Ablet Platform",
    link: "/ativ/components/ativ_target_platform#ablet"
  },
  {
    id: "ativ:AtivTargetAbletSubplatform",
    displayName: "ATiV Target Ablet Subplatform",
    link: "/ativ/components/ativ_target_platform#ablet_sub"
  },
  {
    id: "ativ:AtivTargetSelectedDynamicsPlatform",
    displayName: "ATiV Target Selected Dynamics Platform",
    link: "/ativ/components/ativ_target_platform#selected_dynamics"
  },
].map((x: any) => {
  x.classNames = ["ucLinkATiV"];
  return x;
});

export default ativComponents;

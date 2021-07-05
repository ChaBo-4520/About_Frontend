export default {
  namespaced: true,
  state: {
    // navbar 메뉴
    navList: [
      { url: "exDashBoard", title: "Vue 실습 목록1" },
      { url: "slotParent", title: "Vue 실습 목록2" },
    ],
    // 예제 목록
    examples: [
      {
        title: "animation-with-watch1",
        name: "animationWithWatch1",
      },
      {
        title: "animation-with-watch2",
        name: "animationWithWatch2",
      },
      {
        title: "staggering-list",
        name: "staggeringList",
      },
      {
        title: "transition1",
        name: "transition1",
      },
      {
        title: "transition2",
        name: "transition2",
      },
      {
        title: "transition3",
        name: "transition3",
      },
    ],
  },
};

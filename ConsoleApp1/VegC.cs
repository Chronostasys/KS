using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;

namespace VegDatabaseCS
{
    public class VegC
    {
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "Search")]
        private static extern IntPtr Search(IntPtr key, IntPtr pnode);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetPrimary")]
        private static extern IntPtr GetPrimary();
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "NextPrimary")]
        private static extern IntPtr NextPrimary(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetPrimaryId")]
        private static extern char GetPrimaryId(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetPrimaryName")]
        private static extern IntPtr GetPrimaryName(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetSecondary")]
        private static extern IntPtr GetSecondary(IntPtr prime);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "NextSecondary")]
        private static extern IntPtr NextSecondary(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetSecondaryId")]
        private static extern int GetSecondaryId(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetSecondaryName")]
        private static extern IntPtr GetSecondaryName(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetSecondaryNutrition")]
        private static extern IntPtr GetSecondaryNutrition(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetTertiary")]
        private static extern IntPtr GetTertiary(IntPtr prime);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "NextTertiary")]
        private static extern IntPtr NextTertiary(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetTertiaryId")]
        private static extern int GetTertiaryId(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetTertiaryWeight")]
        private static extern float GetTertiaryWeight(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetTertiaryArea")]
        private static extern int GetTertiaryArea(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetTertiaryYear")]
        private static extern IntPtr GetTertiaryYear(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetTSearch")]
        private static extern IntPtr GetTSearch(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetSSearch")]
        private static extern IntPtr GetSSearch(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "GetPSearch")]
        private static extern IntPtr GetPSearch(IntPtr node);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "EditP")]
        private static extern IntPtr EditP(IntPtr node, char id, IntPtr className);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "EditS")]
        private static extern IntPtr EditS(IntPtr node, int vegId, IntPtr vegName, IntPtr nutrition, char classId);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "EditT")]
        private static extern IntPtr EditT(IntPtr node, int id, int area, float weight, IntPtr year);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "AddP")]
        private static extern IntPtr AddP(IntPtr node, char id, IntPtr className);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "AddS")]
        private static extern IntPtr AddS(IntPtr node, int vegId, IntPtr vegName, IntPtr nutrition, char classId);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "AddT")]
        private static extern IntPtr AddT(IntPtr node, int id, int area, float weight, IntPtr year, int vegId);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "DelP")]
        private static extern IntPtr DelP(IntPtr node, char id);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "DelS")]
        private static extern IntPtr DelS(IntPtr node, int vegId);
        [DllImport("VegKS.dll", CallingConvention = CallingConvention.Cdecl, EntryPoint = "DelT")]
        private static extern IntPtr DelT(IntPtr node, int id);
        private static IntPtr PNode;


        public static void DelT(TertiaryNode node)
        {
            DelT(PNode, node.Id);
        }
        public static void DelS(SecondaryNode node)
        {
            DelS(PNode, node.VegId);
        }
        public static void DelP(PrimaryNode node)
        {
            DelP(PNode, node.ClassId);
        }
        public static void AddT(TertiaryNode node)
        {
            AddT(PNode, node.Id, node.Area, node.Weight, Marshal.StringToCoTaskMemUTF8(node.Year), node.VegId);
        }
        public static void AddS(SecondaryNode node)
        {
            AddS(PNode, node.VegId, Marshal.StringToCoTaskMemUTF8(node.VegName),
                Marshal.StringToCoTaskMemUTF8(node.Nutrition), node.ClassId);
        }
        public static void AddP(PrimaryNode node)
        {
            AddP(PNode, node.ClassId, Marshal.StringToCoTaskMemUTF8(node.ClassName));
        }
        public static void EditT(TertiaryNode node)
        {
            EditT(PNode, node.Id, node.Area, node.Weight, Marshal.StringToCoTaskMemUTF8(node.Year));
        }
        public static void EditS(SecondaryNode node)
        {
            EditS(PNode, node.VegId, Marshal.StringToCoTaskMemUTF8(node.VegName),
                Marshal.StringToCoTaskMemUTF8(node.Nutrition), node.ClassId);
        }
        public static void EditP(char id, string className)
        {
            EditP(PNode, id, Marshal.StringToCoTaskMemUTF8(className));
        }

        public static (List<PrimaryNode> plist, List<SecondaryNode> slist, List<TertiaryNode> tlist) Search(string key)
        {
            var slist = new List<SecondaryNode>();
            var plist = new List<PrimaryNode>();
            var tlist = new List<TertiaryNode>();
            //File.WriteAllText("string.txt", key+"\0");
            //key = Encoding.UTF8.GetString(Encoding.Default.GetBytes(key));
            var keyptr = Marshal.StringToCoTaskMemUTF8(key);
            var h = Search(keyptr, PNode);
            var p = GetPSearch(h);
            while (true)
            {
                if (p == IntPtr.Zero)
                {
                    break;
                }
                var id = VegC.GetPrimaryId(p);

                var n = Marshal.PtrToStringUTF8(VegC.GetPrimaryName(p));
                var node = new PrimaryNode
                {
                    ClassId = id,
                    ClassName = n
                };
                plist.Add(node);
                p = VegC.NextPrimary(p);
            }
            var s = GetSSearch(h);
            while (true)
            {
                if (s == IntPtr.Zero)
                {
                    break;
                }
                var vegId = VegC.GetSecondaryId(s);
                var vegName = Marshal.PtrToStringUTF8(VegC.GetSecondaryName(s));
                var nu = Marshal.PtrToStringUTF8(VegC.GetSecondaryNutrition(s));
                var snode = new SecondaryNode(vegId, vegName, nu, '0');
                slist.Add(snode);
                s = VegC.NextSecondary(s);
            }
            var t = GetTSearch(h);
            while (true)
            {
                if (t == IntPtr.Zero)
                {
                    break;
                }
                var tid = VegC.GetTertiaryId(t);
                var area = VegC.GetTertiaryArea(t);
                var weight = VegC.GetTertiaryWeight(t);
                var year = Marshal.PtrToStringUTF8(VegC.GetTertiaryYear(t));
                var tnode = new TertiaryNode(tid, area, weight, year);
                tlist.Add(tnode);
                t = VegC.NextTertiary(t);
            }
            return (plist, slist, tlist);
        }
        public static (List<PrimaryNode> plist, List<SecondaryNode> slist, List<TertiaryNode> tlist) LoadData()
        {
            var slist = new List<SecondaryNode>();
            var plist = new List<PrimaryNode>();
            var tlist = new List<TertiaryNode>();
            var p = VegC.GetPrimary();
            PNode = p;
            while (true)
            {
                if (p == IntPtr.Zero)
                {
                    break;
                }
                var id = VegC.GetPrimaryId(p);

                var n = Marshal.PtrToStringUTF8(VegC.GetPrimaryName(p));
                var node = new PrimaryNode
                {
                    ClassId = id,
                    ClassName = n
                };
                var s = VegC.GetSecondary(p);
                while (true)
                {
                    if (s == IntPtr.Zero)
                    {
                        break;
                    }
                    var vegId = VegC.GetSecondaryId(s);
                    var vegName = Marshal.PtrToStringUTF8(VegC.GetSecondaryName(s));
                    var nu = Marshal.PtrToStringUTF8(VegC.GetSecondaryNutrition(s));
                    var snode = new SecondaryNode(vegId, vegName, nu, node.ClassId);
                    var t = VegC.GetTertiary(s);
                    while (true)
                    {
                        if (t == IntPtr.Zero)
                        {
                            break;
                        }
                        var tid = VegC.GetTertiaryId(t);
                        var area = VegC.GetTertiaryArea(t);
                        var weight = VegC.GetTertiaryWeight(t);
                        var year = Marshal.PtrToStringUTF8(VegC.GetTertiaryYear(t));
                        var tnode = new TertiaryNode(tid, area, weight, year);
                        tnode.VegId = snode.VegId;
                        tlist.Add(tnode);
                        snode.TertiarieList.Add(tnode);
                        t = VegC.NextTertiary(t);
                    }
                    slist.Add(snode);
                    node.SecondaryList.Add(snode);
                    s = VegC.NextSecondary(s);
                }
                plist.Add(node);
                p = VegC.NextPrimary(p);
            }
            return (plist, slist, tlist);
        }
    }
}

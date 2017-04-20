//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Mvc.ModelBinding;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Angular
//{
//    public class DateTimeBinder : IModelBinderProvider
//    {
//        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
//        {
//            var name = bindingContext.ModelName;
//            var value = bindingContext.ValueProvider.GetValue(name);
//            if (value == null)
//                return null;

//            DateTime date;
//            if (DateTime.TryParse(value.AttemptedValue, null, DateTimeStyles.RoundtripKind, out date))
//                return date;
//            else
//                return base.BindModel(controllerContext, bindingContext);
//        }
//    }
//}
